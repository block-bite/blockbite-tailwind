import "./vite.css";
document.querySelector("#app").innerHTML = `
<div style="--b_full:100%;">
  <div class="w-full h-[500px] grid b_grid-area-64 bg-red-200">
    <h1 class="bg-yellow-200 b_area md:b_area-x-6 md:b_area-y-4 md:b_area-w-14 md:b_area-h-14">Grid area </h1>
  </div>


   <div class="w-full h-[500px] grid b_grid-area-64 bg-red-200">
    <h1 class="bg-yellow-200 b_area-[1-1-20-40]">Grid area !</h1>
  </div>

  <div class="container bg-red-yellow-200 my-4 mx-auto">
    <h4 class="border-red-200 text-4xl border border-red-200  h-[300px]">container tailwind</h4>
  </div>


  <div class="b_container-fluid bg-red-yellow-200 my-4">
    <h4 class="border-red-200 text-4xl border border-red-200  h-[300px]">container fluid</h4>
  </div>

  <div class="b_grid-container bg-red-yellow-200 my-4 h-[300px]">
    <h4 class="border border-red-200 text-4xl col-span-12 col-start-2">container grid</h4>
  </div>

 <div class="b_grid-container bg-red-yellow-200 my-4 h-[300px]">
    <h4 class="border border-red-200 text-4xl col-span-7 col-start-1">left</h4>
    <p class="border border-red-200 text-4xl col-span-6">right</p>
  </div>

   <div class="b_grid-container bg-red-yellow-200 my-4 h-[300px]">
    <h4 class="border border-red-200 text-4xl col-span-6 col-start-2">left</h4>
    <p class="border border-red-200 text-4xl col-span-7 col-start-8">right</p>
  </div>

   <div class="b_grid-container bg-yellow-200 my-4 h-[300px]">
      <h4 class="border bg-red-200 text-4xl col-span-7 col-start-1 row-start-1">left image</h4>
      <h4 class="border border-blue-200 bg-blue-200 bg-opacity-40 text-4xl col-span-6 col-start-2 row-start-1">left text with extra layer</h4>
       <p class="border border-red-200 text-4xl col-span-6">right</p>
   </div>


    <div class="b_grid-container bg-yellow-200 my-4 h-[300px]">
      <h4 class="border bg-red-200 text-4xl col-span-7 col-start-8 row-start-1 text-right">right image</h4>
      <h4 class="border border-blue-200 bg-blue-200 bg-opacity-40 text-4xl col-span-6 col-start-8 row-start-1">left text</h4>
       <p class="border border-red-200 text-4xl col-span-6">left</p>
   </div>


    <div class="b_grid-container bg-yellow-200 my-4 h-[300px] w-full">
      <div class="border bg-red-200 text-4xl col-span-7 col-start-1 row-start-1">
        <h4 class="border border-blue-200 bg-blue-200 bg-opacity-40 text-4xl" style="padding-left:var(--b_fr-size);">left text with --b_fr-size</h4>
      </div>
      
       <p class="border border-red-200 text-4xl col-span-6">right</p>
   </div>

<div class="b_theme-bg-red-500 bg-yellow-300 text-white p-40 text-3xl">
  Works beautifully 🎨
  <div class="bg-b_theme">This should be red from the parent</div>
</div>
  
</div>
`;
