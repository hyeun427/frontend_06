// 등록 페이지 지도(지도 크기가 작음)
import { useEffect } from "react";

export default function KakaoMap(props) {
  const address = String(props.address);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=21da148329e9447c55831eab394b9234&autoload=false&libraries=services ";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4851, 126.8969), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            // console.log(coords);
            if (props.setGps) props.setGps(coords);
            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const info = new window.kakao.maps.InfoWindow({
              content: `<div style="width:210px;text-align:center;padding:5px 0;">${address}</div>`,
            });
            info.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [address]);

  return (
    <>
      <div>
        <div id="map" style={{ width: 400, height: 250 }}></div>
      </div>
    </>
  );
}
