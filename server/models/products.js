const data = require("../data/products.json");
const { CustomError, statusCodes } = require("./errors");
const { connect } = require("./supabase");
const TABLE_NAME = "products";

const isAdmin = true; //placeholder admin check

async function getAll() {
  const list = await connect.from(TABLE_NAME).select("*");
  if (error) {
    throw error;
  }
  return {
    items: list.data,
    total: list.count,
  };
}

async function get(id) {
  const { data: item, error } = await connect()
    .from(TABLE_NAME)
    .select("*")
    .eq("id", id)
    .single();
  if (!item) {
    throw new CustomError("Item not found", statusCodes.NOT_FOUND);
  }
  if (error) {
    throw error;
  }
  return item;
}
async function search(query) {
  const { data: items, error } = await connect()
    .from(TABLE_NAME)
    .select("*")
    .or(`title.ilike.%${query}%,description.ilike.%${query}%`);
  if (error) {
    throw error;
  }
  return items;
}
async function create(item) {
  if (!isAdmin) {
    throw CustomError("You are not authorized", statusCodes.UNAUTHORIZED);
  }
  const { data: newItem, error } = await connect()
    .from(TABLE_NAME)
    .insert(item);
  if (error) {
    throw error;
  }
  return newItem;
}

async function update(id, item) {
  const index = data.items.findIndex((item) => item.id == id);
  if (!isAdmin) {
    throw CustomError("You are not authorized", statusCodes.UNAUTHORIZED);
  } else if (index === -1) {
    throw CustomError("Index out of bounds", statusCodes.NOT_FOUND);
  }
  const { data: updatedItem, error } = await connect()
    .from(TABLE_NAME)
    .update(item)
    .eq("id", id);
  if (error) {
    throw error;
  }
  return updatedItem;
}

async function remove(id) {
  const index = data.items.findIndex((item) => item.id == id);
  if (!isAdmin) {
    throw CustomError("You are not authorized", statusCodes.UNAUTHORIZED);
  } else if (index === -1) {
    throw CustomError("Index out of bounds", statusCodes.NOT_FOUND);
  }
  const { data: deletedItem, error } = await connect()
    .from(TABLE_NAME)
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }
  return deletedItem;
}

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
};
