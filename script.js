/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'manipulate text background',
        'name': 'manipulate text background.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a2',
        'title': 'build gauge with css',
        'name': 'build gauge with css.mp4',
        'duration': '2:45',
    },
    {
        'id': 'a3',
        'title': '3D popup card',
        'name': '3D popup card.mp4',
        'duration': '24:49',
    },

    {
        'id': 'a4',
        'title': 'customize HTML5 form elements',
        'name': 'customize HTML5 form elements.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'custom select box',
        'name': 'custom select box.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'embed google map to contact form',
        'name': 'embed google map to contact form.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': 'password strength checker javascript web app',
        'name': 'password strength checker javascript web app.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'custom range slider',
        'name': 'custom range slider.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'animated shopping cart',
        'name': 'animated shopping cart.mp4',
        'duration': '3:38',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
