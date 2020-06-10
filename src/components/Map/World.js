import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { geoMercator, geoPath, geoGraticule10, geoEqualEarth } from "d3-geo";
import $ from "jquery";

function WorldMap({ country }) {
  const [worlddata, setWorlddata] = useState([]);
  const [lastcountry, setLastCountry] = useState({ name: "123", color: "123" });

  console.log("map country", country);
  const projection = geoEqualEarth()
    .scale(160)
    .translate([800 / 2, 450 / 2]);
  useEffect(() => {
    fetch("/map/ne_110m_admin_0_countries_geojson.json")
      // fetch("./map/test.json")
      .then(res => res.json())
      .then(data => {
        // console.log("world", data);
        setWorlddata(data.features);
        // draw(data);
      });
    const map = d3
      .select("#map")
      .attr("width", 500)
      .attr("height", 500);
    function draw(mapData) {
      // 設定投影中心點與縮放倍率
      const projection = d3.geoMercator().translate([width / 2, height / 2]);

      // 將投影資料轉換為路徑
      const path = d3.geoPath().projection(projection);

      // 繪製地圖
      map
        .selectAll("path")
        .data(mapData.objects.ne_110m_land.geometries)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke", "black")
        .attr("stroke-width", "0.7")
        .attr("fill", "steelblue")
        .on("mouseover", function() {
          d3.select(this).attr("fill", "#007bff");
        })
        // 滑鼠碰到後改變顏色
        .on("mouseleave", function() {
          d3.select(this).attr("fill", "steelblue");
        });
      // 滑鼠離開將顏色變回
    }
  }, []);
  //ADD function to svg
  const handleCountryEnter = index => {
    // console.log('hover on',worlddata[index].properties.NAME);
    $("#countryname").text("目前國家: " + worlddata[index].properties.NAME);
    // $('path').attr('fill','red')
  };
  let lastpath; //save last target
  let lastpathcolor; //save last target color
  const handleClick = e => {
    // console.log(e.target);
    $(lastpath).attr("fill", lastpathcolor);
    lastpathcolor = $(e.target).attr("fill");
    lastpath = e.target;
    console.log("lastpath", lastpath);
    console.log("lastpathcolor", lastpathcolor);
    // $('g.countries').find('path').attr('fill','red')
    // $("path[fill='red']").attr('fill',lastpathcolor)

    $(e.target).attr("fill", "red");
  };
  useEffect(() => {
    console.log("props", country);
    //將上一個選擇的country設定回預設
    console.log("lastcountry prop", lastcountry.name);
    $(`path[data-countryname=${lastcountry.name}]`).attr(
      "fill",
      lastcountry.color
    );
    let lastcountryproperty = {
      name: country,
      color: $(`path[data-countryname=${country}]`).attr("fill")
    };
    setLastCountry(lastcountryproperty);
    // console.log('last country',lastcountryselect)
    $(`path[data-countryname=${country}]`).attr("fill", "blue");
  }, [country]);
  return (
    <>
      <h5 className="my-3" id="countryname">
        目前國家:
      </h5>
      <p style={{ color: "blue" }}>選取不同國家在地圖上會變藍色</p>
      <div id="map">
        <svg
          style={{ border: "1px solid gray" }}
          width={1000}
          height={550}
          viewBox="0 0 800 450"
        >
          <g className="countries">
            {worlddata.map((d, i) => (
              <path
                key={`path-${i}`}
                d={geoPath().projection(projection)(d)}
                className="country"
                fill={`rgba(38,50,56,${(1 / worlddata.length) * i})`}
                stroke="#FFFFFF"
                strokeWidth={0.5}
                onMouseEnter={() => handleCountryEnter(i)}
                // onClick={e => handleClick(e)}
                data-countryname={d.properties.NAME}
              />
            ))}
          </g>
        </svg>
      </div>
    </>
  );
}

export default WorldMap;
