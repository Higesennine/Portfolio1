import { Product } from "../App";
import { supabase } from "./supabaseService"

export const getAllProducts = async () => {
    try {
        const products = await supabase.from("products").select("id, name, image_url, price");
        // console.log("Fetched products:", products);
        return products.data as Product[];
    } catch (error) {
        console.error(error);
        return [];
    }
}