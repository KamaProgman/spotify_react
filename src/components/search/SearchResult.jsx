import Song from "../children/Song";

const SearchResult = ({ tracks }) => {
   return (
      <div className="max-w-[1400px] flex gap-8">
         <div className="flex-1 max-w-[38%]">
            <h1 className="text-[26px] font-bold mb-5">Top Results</h1>
            <div
               className="bg-[#aaaaaa10] p-5 rounded-lg
               ease-linear duration-150 hover:bg-[#aaaaaa25]">
               <div className="w-24 h-24 mb-6 rounded-full overflow-hidden shadow-2xl">
                  <img src="https://i.scdn.co/image/ab67616d0000b2730f374035d274fd884ee522fb" alt="artist" className="w-full" />
               </div>
               <div>
                  <div className="mb-8 text-3xl font-bold">Miyagi</div>
                  <span className="py-[6px] px-[10px] bg-[#00000030] text-lg font-bold uppercase rounded-3xl">Artist</span>
               </div>
            </div>
         </div>
         <div className="flex-1">
            <h2 className="text-[26px] font-bold">Songs</h2>
            <table className="w-full">
               <tbody className="w-full flex flex-col gap-1" >
                  {tracks.map((item, idx) => (
                     <Song key={item.id} track={item} index={idx + 1} />
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default SearchResult;