import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "@/mineComponents/filters";
import { ProductoCard } from "@/mineComponents/ProductoCard";
import { getarticles } from "../../logic/configs";
import { Articulos } from "logic/types";
// import { useFilters } from "@/hooks/useFilters";

export function AllProducts() {
  const { filters, changeFilters } = useContext(FiltersContext);
  console.log(filters);

  const [articles, setArticles] = useState<Articulos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedArticles = await getarticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error al obtener los artículos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <input type="text" placeholder="jajaj" className="bg-red-900" />
      <header>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </header>
      <ProductoCard until={99} articles={articles} />
    </>
  );
}
