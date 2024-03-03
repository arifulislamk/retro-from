const loadData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const allPost = data.posts
    displayAllpost(allPost)
}

const allPostContainer = document.getElementById('all-posts-Container')
 function displayAllpost(allPost){
    console.log(allPost)
    allPost.forEach ((allPost) => {
        const newDiv = document.createElement('div')
    newDiv.innerHTML = `
    <div class="lg:flex lg:justify-around p-2 lg:p-10 bg-[#797DFC1A] rounded-lg">
       <div class="w-1/2 lg:w-1/6"> <img class="" src="${allPost.image}" alt=""></div>
       <div class="">
           <div class="space-y-3">
               <div class="flex gap-7 text-[#12132DCC]">
                   <h2># ${allPost.category}</h2>
                   <h2>Author : ${allPost.author.name}</h2>
               </div>
               <div class="text-xl text-[#12132D] font-bold">
                   <p>${allPost.title }</p>
               </div>
               <div class="text-[#12132D99]">
                   <p>${allPost.description}</p>
               </div>
           </div>
           <div class="flex items-center justify-between mt-8">
               <div class=" flex space-x-5 lg:space-x-10 text-[#12132D99]">
                   <div class="flex items-center gap-2 lg:gap-5"><img src="images/message.png" alt="">
                       <P>${allPost.comment_count}</P>
                   </div>
                   <div class="flex items-center gap-2 lg:gap-5"><img src="images/eye.png" alt="">
                       <P>${allPost.view_count}</P>
                   </div>
                   <div class="flex items-center gap-2 lg:gap-5"><img src="images/clock.png" alt="">
                       <P>${allPost.posted_time}</P>
                   </div>
               </div>
               <div>
                   <img src="images/messseag 2.png" alt="">
               </div>
           </div>
    
        </div>
    
     </div>
    `
    allPostContainer.appendChild(newDiv)
    })    
 }

loadData()