const CityWeather = ({ city, weather }) => {
  return (
    <div className="flex items-center justify-between px-[70px] mx-[70px] border-2 border-[#589DCE] rounded-xl h-[250px]">
      <div>
        <p className="text-[#589DCE] text-5xl pb-[10px] font-bold">Sol</p>
        <p className="text-[#589DCE] text-4xl font-bold">24ºC{weather}</p>
        <p className="text-[#589DCE] text-3xl font-bold">Barcelona{city}</p>
      </div>
      <div>
        <p className="text-[#589DCE] text-5xl font-bold pb-[10px]">16:20</p>
        <p className="text-[#589DCE] text-4xl font-bold">Sunny,</p>
        <p className="text-[#589DCE] text-3xl font-bold">Monday</p>
      </div>
    </div>
  );
};

export default CityWeather;
