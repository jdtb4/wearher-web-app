import Search from "./Search";
const Header = () => {
  return (
    <div className="flex justify-between font-bold px-[70px] pt-[40px] pb-[40px]">
      <p className="text-5xl font-Koulen uppercase text-[#589DCE]">
        Wether<span>.</span>
      </p>
      <Search />
    </div>
  );
};

export default Header;
