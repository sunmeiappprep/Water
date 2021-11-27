import React from 'react'
import { Link } from 'react-router-dom'
export default function socials() {
    return (
        <div className="LinksCon">
            <a href={`https://www.linkedin.com/in/sunny-mei-534677153/`}><img src={"https://water-seeds.s3.amazonaws.com/linkedin+(1).png"}></img></a>
            <a href={`https://github.com/sunmeiappprep`}><img src={"https://water-seeds.s3.amazonaws.com/github-logo-silhouette-in-a-square.png"}></img></a>
            <a href={`https://angel.co/u/sunny-mei-2`}><img src={"https://water-seeds.s3.amazonaws.com/1608502_angellist_icon.png"}></img></a>
            <a href={`https://sunmeiappprep.github.io/Profolio/`}><img src={"https://water-seeds.s3.amazonaws.com/portfolio.png"}></img></a>
            
            {/* <Link to="" className="Links"><</Link> */}
        </div>
    )
}
