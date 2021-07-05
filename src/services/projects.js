import blossom1 from '../assets/Blossom/Blossom-01.png';
import blossom2 from '../assets/Blossom/Blossom-02.png';
import blossom3 from '../assets/Blossom/Blossom-03.png';
import blossom4 from '../assets/Blossom/Blossom-04.png';
import blossom5 from '../assets/Blossom/Blossom-05.png';
import wbc1 from '../assets/WholeBodyChallenge/WBC-01.png';
import wbc2 from '../assets/WholeBodyChallenge/WBC-02.png';
import wbc3 from '../assets/WholeBodyChallenge/WBC-03.png';
import wbc4 from '../assets/WholeBodyChallenge/WBC-04.png';
import wbc5 from '../assets/WholeBodyChallenge/WBC-05.png';
import shift1 from '../assets/DailyShift/Shift-01.png'
import shift2 from '../assets/DailyShift/Shift-02.png'
import shift3 from '../assets/DailyShift/Shift-03.png'
import shift4 from '../assets/DailyShift/Shift-04.png'
import shift5 from '../assets/DailyShift/Shift-05.png'
import starv1 from '../assets/Starv/Starv-01.png'
import starv2 from '../assets/Starv/Starv-02.png'
import starv3 from '../assets/Starv/Starv-03.png'
import starv4 from '../assets/Starv/Starv-04.png'
import starv5 from '../assets/Starv/Starv-05.png'
import nls1 from '../assets/NLS/NLS1.png'
import nls2 from '../assets/NLS/NLS2.png'
import nls3 from '../assets/NLS/NLS3.png'
import nls4 from '../assets/NLS/NLS4.png'
import nls5 from '../assets/NLS/NLS5.png'
import equine1 from '../assets/equine/Equine-01.png'
import equine2 from '../assets/equine/Equine-02.png'
import equine3 from '../assets/equine/Equine-03.png'
import equine4 from '../assets/equine/Equine-04.png'


export const projects = {
    theDailyShift: {
        title: 'The Daily Shift',
        work: 'Dev + Design',
        timeline: '8 weeks',
        problem: 'During our busy schedules we often times forget to spend time on ourselves. The daily shifts was searching for a way to prompt someone to reconnect with their mind, body, and soul in a positive way.',
        solution: 'After extensive research the daily shifts built and app that prompts you at the three most important times if the day, morning, afternoon, and night. Asking you to do things like mediate, say what you are great full  for, and invites you to do things you might not normal so, like talk to someone you don’t know. All of which help you stay in tune with your mind and body.',
        images: [ shift1, shift2, shift3, shift4, shift5 ],
        liveLink: '',
        appstoreurl: '//apps.apple.com/us/app/the-daily-shifts/id1441559027'
    },
    wholeBodyChallenge: {
        title: 'Whole Body Challenge',
        work: 'Dev + Design',
        timeline: '8 weeks',
        problem: 'New U needed a custom app to run a weight-loss contest for their subscribers. It needed a clean UI and implementation of a randomly generated fitness word for them to write down when they take photos so cheating the system would be more difficult.',
        solution: 'So for 8 weeks, they ran the Whole Body Challenge web app. It allowed users to upload photos once a week and submit their current weight to be tracked throughout the competition. The app shipped complete with both a mobile-first user interface and a backend admin dashboard.',
        images: [ wbc1, wbc2, wbc3, wbc4, wbc5 ],
        appstoreurl: '//www.wholebodychallenge.com'
    },
    blossom: {
        title: 'Blossom',
        work: 'Dev + Design',
        timeline: '8 weeks',
        problem: 'In a time where social media connects everyone we’ve never been so disconnect from each other. Things like snapchat or instagram allow people to share memories, while tinder connects you with others. This was not blossom’s goal.',
        solution: 'Blossom created a platform that allows people to plan and connect in real life with ease. By creating a platform that makes meeting people near you easy it also opens the doors for be able to share moments with those people over and over.',
        images: [ blossom1, blossom2, blossom3, blossom4, blossom5 ],
        liveLink: '',
        appstoreurl: '//apps.apple.com/us/app/blossom-social-app/id1478467838'

    },
    starv: {
        title: 'Starv',
        work: 'Design Only',
        timeline: '4 weeks',
        problem: 'Finding local talent, let alone hiring local talent, is not easy. Starv is a network for everyday people to find artists, musicians, dancers, and performers of all varieties to book for parties or local events ',
        solution: 'We designed both a native and web app for the local talent marketplace. Whether you have talent or need to hire someone talented, our design makes it simple to sign up. Once you have an account, the user experience differs based on the type of account you created. Talent can see a schedule of their bookings and customers can browse local talent.',
        images: [ starv1, starv2, starv3, starv4, starv5 ],
    },
    nextLevelSports: {
        title: 'Next Level Sports',
        work: 'Design only',
        timeline: '12 weeks',
        problem: 'Coaches and athletes currently have no elegant solution for tracking player statistics and video playback. Everything out there requires rigorous onboarding and archaic design, NLS is looking to fix that.',
        solution: 'Currently under development we have created a mobile application that allows coaches and players to records matches and have instant access to player videos and stats.',
        images: [ nls1, nls2, nls3, nls4, nls5 ],
        liveLink: '',
        appstoreurl: '//nextlvlsportsapp.com/'
    },
    equineTrader: {
        title: 'Equine Trader',
        work: 'Dev + Design',
        timeline: '',
        problem: ' Buying and selling horses was a difficult task for just about everyone. Buyers struggled to find horses that weren’t already sold and it was even harder try and refine horses by the traits one might actually Interested in. Selling horses had its own other sets of problems. One of the main concerns sellers mentioned was being unable to find a platform that contained an even amount of both high & low horses.',
        solution: ' EquineTrader brings refined searches to buyers so they can search horses that match an exact criteria.  While also giving sellers a platform that has a wide range of customers making both high and low end horses easy to buy and sell. ',
        images: [ equine1, equine2, equine3, equine4 ],
        appstoreurl: '//apps.apple.com/us/app/equinetrader/id1499293676'
    }
}