import React from 'react'
import fa_icons from '../../../../utils/static_resources/paralaxIcons'
import backgroundColors from '../../../../utils/static_resources/backgroundColors'
const positions = [
    {
        top: 50,
        left: 50,
        size:100
    },
    {
        top: 100,
        left: 50,
        size:100
    },
    {
        top: 150,
        left: 50,
        size:100
    },
    {
        top: 25,
        left: 45,
        size:100
    },
    {
        top: 75,
        left: 43,
        size:100
    },
    {
        top: 125,
        left: 45,
        size:100
    },
    {
        top: 125,
        left: 45,
        size:100
    },
    {
        top: 125,
        left: 45,
        size:100
    },

]

export default function ParalaxLightbulb() {
    let objs = [];
    fa_icons.map((val, idx)=>{
        let i = idx%backgroundColors.length || idx;
        let color = backgroundColors[i];
        objs.push({color:{color}, html: val})
    })
    console.log(objs)

    return (
        <div style={{marginTop: -300, }}>
            {objs.map((obj, idx)=>{
                return <div style={{
                    borderRadius: '100px',
                    boxShadow: '0px 0px 2px #888',
                    padding: '10px',
                    margin: '5px',
                    width: '40px',
                    backgroundColor: obj.color.color,
                    zIndex:10,
                    position: "absolute",
                    top: positions[idx].top,
                    left: `${positions[idx].left.toString()}%`                    
                }} dangerouslySetInnerHTML={{__html: obj.html}} key={idx}/>
            })}
        </div>
    )
}
