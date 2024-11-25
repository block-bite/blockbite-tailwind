import "./vite.css";
document.querySelector("#app").innerHTML = `
<div>
  <div class="w-screen h-[500px] grid _grid-area-64 bg-red-200">
    <h1 class="bg-yellow-200 b_area md:b_area-x-6 md:b_area-y-4 md:b_area-w-14 md:b_area-h-14">Grid area </h1>
  </div>

  <div class="b_container-fluid bg-red-yellow-200 my-4">
    <h4 class="border-red-200 text-4xl border border-red-200  h-[300px]">container fluid</h4>
  </div>

  <div class="b_grid-container bg-red-yellow-200 my-4 h-[300px]">
    <h4 class="border border-red-200 text-4xl col-span-12 col-start-2">container grid</h4>
  </div>

   <div class="b_grid-container bg-yellow-200 my-4 h-[300px]">
      <div class='b_grid-container-left bg-red-200 text-4xl col-span-7'>
        <h4>container left with col-span-7</h4>
    </div>
   </div>

     <div class="b_grid-container bg-yellow-200 my-4 h-[300px]">
      <div class='b_grid-container-right text-4xl col-span-7 col-start-8'>
        <h4 class="bg-red-200">container right with col-span-7</h4>
    </div>
   </div>
</div>
`;
