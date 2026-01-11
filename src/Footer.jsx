
function Footer(){
    
    
    

    const year = new Date().getFullYear();
    return(
        <div className="footer dark:bg-gray-600">
        <h2 className="text-center text-xl font-nts" id="year">© {year} HighSkyGuy1, All rights reserved.</h2>
    </div>
    )
    
}
export default Footer