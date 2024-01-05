

function PageInfos(){

    const infoStyle = {
       
        fontFamily: "Rubik", 
        fontSize: "2rem",


    }

    return(
        <div className = "row">
            <div className = "col-12 col-lg-6 p-5">
                <h1 style = {infoStyle}>Számítógépek egy szerető kézből, azonnal az Ön otthonában! A otthona melegében élvezheti a számítógépe születését!</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum incidunt exercitationem placeat error magni, repellendus quam vero dolore voluptates laudantium doloribus possimus ea distinctio fuga voluptas obcaecati facilis dolor.</h5>
            </div>
            <div className = "col-12 col-lg-6">
                <h1>images</h1>
            </div>
        </div>
    )
}

export default PageInfos;