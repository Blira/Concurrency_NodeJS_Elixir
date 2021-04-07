defmodule ProjectWeb.PageController do
  use ProjectWeb, :controller

  def index(conn, _params) do
    :timer.sleep(1000)
    json(conn, %{ok: "ok"})
  end
end
