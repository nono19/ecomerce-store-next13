import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeature: true });
  const billboard = await getBillboard("ba9509ef-f164-4ef1-877d-e3a8c568c840");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList 
            title="Featured Products"
            items={products}
          />
        </div>
      </div>
    </Container>
  )
}

export default HomePage;