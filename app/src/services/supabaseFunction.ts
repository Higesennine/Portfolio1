import { supabase } from "./supabaseService"

export const getAllProducts = async () => {
    try {
        const products = await supabase.from("products").select("*");
        return products.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}