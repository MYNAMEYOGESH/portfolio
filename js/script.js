(function(){
    document.querySelector('.theme-btn').addEventListener('click',() =>{
        document.body.classList.toggle('light-mode');
    });

    [...document.querySelectorAll('.control')].forEach(item =>{
        item.addEventListener('click',function(){
            // remove active-btn class from active link
            document.querySelector('.active-btn').classList.remove('active-btn');
            //adding active btn to current click link
            this.classList.add('active-btn')
            //
            document.querySelector('.active').classList.remove('active');
            //
            document.getElementById(item.dataset.id).classList.add('active')


        })
    })
})()

function handler () {
    [...document.querySelectorAll('.social-icon')].forEach(item => {
        // console.log(`item =`, item.classList)
        item.addEventListener("click",function(){
            document.querySelector('.active').classList.remove('active');
            console.log(`single=`, this.classList)
            this.classList.add('active')
        })
    })
}

handler()