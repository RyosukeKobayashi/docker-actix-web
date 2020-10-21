#[macro_use]
extern crate diesel;

use actix_web::{dev::ServiceRequest, web, App, Error, HttpServer};
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};
use dotenv::dotenv;

mod config;
mod errors;
mod handlers;
mod models;
mod schema;

pub type Pool = r2d2::Pool<ConnectionManager<PgConnection>>;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
  dotenv().ok();
  std::env::set_var("RUST_LOG", "actix_web=debug");

  let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");

  let config = crate::config::Config::from_env().unwrap();
  let manager = ConnectionManager::<PgConnection>::new(database_url);
  let pool: Pool = r2d2::Pool::builder()
    .build(manager)
    .expect("Failed to create pool.");

  HttpServer::new(move || {
    App::new()
      .data(pool.clone())
      .route("/users", web::get().to(handlers::get_users))
      .route("/users/{id}", web::get().to(handlers::get_user_by_id))
      .route("/users", web::post().to(handlers::add_user))
      .route("/users/{id}", web::delete().to(handlers::delete_user))
  })
  .bind(config.server_addr.clone())?
  .run()
  .await
}
