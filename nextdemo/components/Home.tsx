
const Home = async () => {
    const res = await fetch("https://via.placeholder.com/500");

    if(!res.ok) throw new Error("error fetching album");

    const album = await res.json();
  return (
    <div>
      
    </div>
  )
}
export default Home;
