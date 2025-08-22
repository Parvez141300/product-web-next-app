
import Banner from "./Home/Banner/Banner";
import UserInfo from "./components/userInfo/UserInfo";
import Products from "./products/page";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <section className="space-y-5 my-8">
        <UserInfo></UserInfo>
        <Products></Products>
      </section>
    </div>
  );
}
