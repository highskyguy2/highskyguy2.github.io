
import Footer from './Footer'

function About(){
    return(
        <>
        <div className="about dark:bg-gray-600 h-[38vh]">
            <h1 className="text-center text-5xl font-rubik">About Me</h1>
            <p className="text-xl font-nts">Hi! I'm High! A person who likes programming and making cool stuff like minecraft mods and some nice things.</p>
            <p className="text-xl font-nts">I am quite noobie tho! Mistakes do occur! But I am always willing to learn and improve.</p>
            <div className="p-5"></div>
            <hr />
            <Footer></Footer>
        </div>
        </>
    )
}
export default About;