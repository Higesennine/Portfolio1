import { supabase } from "./supabaseService"

export const getAllProducts = async () => {
    const products = await supabase.from("products").select("*");
    return products.data;
}