const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    const allPost = data.posts
    displayAllpost(allPost)
}

const allPostContainer = document.getElementById('all-posts-Container')

function displayAllpost(allPost) {
    // console.log(allPost)
    allPost.forEach((allPost) => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
    <div class="lg:flex lg:justify-around p-2 lg:p-10 bg-[#797DFC1A] rounded-lg">
       <div class="w-1/2 lg:w-1/4 indicator"> <span id="indicator-up"  class="indicator-item badge ${allPost.isActive ? 'bg-green-700' : 'bg-red-700'}"></span> 
        <img class="" src="${allPost.image}" alt="">
        </div>
       <div class="lg:w-2/3">
           <div class="space-y-3">
               <div class="flex gap-7 text-[#12132DCC]">
                   <h2># ${allPost.category}</h2>
                   <h2>Author : ${allPost.author.name}</h2>
               </div>
               <div class="text-xl text-[#12132D] font-bold">
                   <p>${allPost.title}</p>
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
               <div onclick="handleMesage('${allPost.title.replace("'", " ")}',${allPost.view_count})">
                   <img src="images/messseag 2.png" alt="">
               </div>
           </div>
    
        </div>
    
     </div>
    `
        allPostContainer.appendChild(newDiv)
        // console.log(allPost.isActive);
        // handleIndicator(allPost.isActive)
    })
}

// message button click function 
let count = 0;
function handleMesage(title, countView) {
    count = count + 1;
    const countcontent = document.getElementById('count-content')
    countcontent.innerText = count;
    // console.log(title,countView)
    const messageButtonContent = document.getElementById('message-button-container')
    const newdiv = document.createElement('div')
    newdiv.innerHTML = `
    <div class="flex p-3 lg:space-x-11 bg-white rounded-lg  items-center">
                        <p class="font-semibold text-[#12132D] lg:text-xl">${title}
                        </p>
                        <p class="text-[#12132D99]">${countView}</p>
                    </div>
    `
    messageButtonContent.appendChild(newdiv)
}

// handle indicator 
// const handleIndicator = (isActive) => {
//     console.log(isActive,'up')

//     const indicatorContent = document.getElementById('indicator-up') 
//     // console.log(indicatorContent)
//     if(isActive === false){
//         indicatorContent.classList.add('bg-green-700')
//     }
//     else{
//         indicatorContent.classList.add('bg-green-700')
//     }
// }

const loadData2 = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    const leatesData = data
    // console.log(leatesData)
    const leatesDataContainer = document.getElementById('leates-post-container')
    leatesData.forEach((data) => {
        // console.log(data)
        const newdiv3 = document.createElement('div')
        newdiv3.innerHTML = `
        <div class="card lg:w-96 lg:h-full bg-base-100 shadow-xl">
         <figure><img src="${data.cover_image}" alt="Shoes" /></figure>
            <div class="card-body">
                <div class="flex gap-2"><img src="images/Frame.png" alt="Shoes" />
                <p>${data.author.posted_date ? data.author.posted_date : 'No Publish Date'}</p></div>
                <h2 class="text-[18px] font-bold">${data.title}</h2>
                <p>${data.description}</p>
                <div class="flex gap-3 items-center">
                    <img class="w-1/4 border-2 border-blue-400 rounded-full" src="${data.profile_image}" />
                    <div >
                         <h2 class="font-bold">${data.author.name}</h2>
                        <p>${data.author.designation ? data.author.designation : 'Unknown'}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        leatesDataContainer.appendChild(newdiv3)
    })
}

const loadData3 = async (searchId) => {
    console.log(searchId);
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchId}`)
    const data = await res.json()
    const searchPostData = data.posts
    display2(searchPostData)
}
function display2(searchData) {
    console.log(searchData)
    allPostContainer.textContent =''
    searchData.forEach((data) => {
        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
    <div class="lg:flex lg:justify-around p-2 lg:p-10 bg-[#797DFC1A] rounded-lg">
       <div class="w-1/2 lg:w-1/4 indicator"> <span id="indicator-up"  class="indicator-item badge ${data.isActive ? 'bg-green-700' : 'bg-red-700'}"></span> 
        <img class="" src="${data.image}" alt="">
        </div>
       <div class="lg:w-2/3">
           <div class="space-y-3">
               <div class="flex gap-7 text-[#12132DCC]">
                   <h2># ${data.category}</h2>
                   <h2>Author : ${data.author.name}</h2>
               </div>
               <div class="text-xl text-[#12132D] font-bold">
                   <p>${data.title}</p>
               </div>
               <div class="text-[#12132D99]">
                   <p>${data.description}</p>
               </div>
           </div>
           <div class="flex items-center justify-between mt-8">
               <div class=" flex space-x-5 lg:space-x-10 text-[#12132D99]">
                   <div class="flex items-center gap-2 lg:gap-5"><img src="images/message.png" alt="">
                       <P>${data.comment_count}</P>
                   </div>
                   <div class="flex items-center gap-2 lg:gap-5"><img src="images/eye.png" alt="">
                       <P>${data.view_count}</P>
                   </div>
                   <div class="flex items-center gap-2 lg:gap-5"><img src="images/clock.png" alt="">
                       <P>${data.posted_time}</P>
                   </div>
               </div>
               <div onclick="handleMesage('${data.title.replace("'", " ")}',${data.view_count})">
                   <img src="images/messseag 2.png" alt="">
               </div>
           </div>
    
        </div>
    
     </div>
    `
    allPostContainer.appendChild(newDiv)
    })
}
// handle search button 
const searchButtonHandle = () => {
    const inputContainer = document.getElementById('input-content')
    const inputText = inputContainer.value;
    loadData3(inputText)
}
loadData()
loadData2()