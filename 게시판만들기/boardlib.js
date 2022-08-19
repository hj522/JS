//   var v_queryString = location.href.split("?")[1];
 //   alert(v_queryString.split("&")[1].split("=")[1]); // 글쓴이를 알수있다.
 //   var v_url = location.href; // 주소표시줄에 있는 값을 그대로 읽어온다.
//    alert(v_url);

    // 개발자는 귀차니즘에 반복될 것 같은 예감에 일을 시작합니당
    
    // 게시판 테이블명 잠시 전역으로
    var v_tblName = "gesiTB";

    var request = {}; // name-space용 빈 객체
                      // 사용자 요청(request)을 담은 객체

//   function getParameter(p_name) { // name을 넘기면 value를 리턴해주는 ~ 
    request.getParameter=function(p_name) {
      if(location.href.indexOf("?") == -1) return null;          // indexof 사용해서 문자열 찾기
        var v_queryString = location.href.split("?")[1];        // location.href -> 문자열
  //      alert("?오른쪽값:" + v_queryString);

        var v_nvSSang = v_queryString.split("&");
        for(var i=0; i<v_nvSSang.length; i++) {
  //          alert("&로 자른값:" + v_nvSSang[i]);
            var nv = v_nvSSang[i].split("=");
  //          alert("=로 자른 첫번째:" + nv[0] + " 두번째:" + nv[1]);
            if(nv[0] == p_name) {
                return decodeURIComponent(nv[1]).replaceAll("+"," "); 
            }
        }
        return null; // 못찾았다면 null, 꼭 null일 필요는 없음
    }

    // 같은 name으로 값이 여러 개 넘어오는 것 처리할 함수(getParameterValues) -> 배열이 필요해
    
    // function getParameterValues(p_name) {
    request.getParameterValues=function(p_name) {
        if(location.href.indexOf("?") == -1) return null;
        var v_queryString = location.href.split("?")[1];
        var v_values = []; // 값을 담을 배열
        var v_nvSSang = v_queryString.split("&");
        for(var i=0; i<v_nvSSang.length; i++) {
            var nv = v_nvSSang[i].split("=");
            if(nv[0] == p_name) {       // 찾았다면
                v_values.push(decodeURIComponent(nv[1]).replaceAll("+"," "));  // 배열에 담기
            }
        }
        if(!v_values.length) return null; // 배열의 length가 0이면 
        return v_values; // 배열의 length가 0이 아니라면 
    }
    
    /*
        인코딩 함수         디코딩 함수
        escape              unescape                아주 옛날거
        encodeURI           decodeURI               조금 옛날거
        encodeURIComponent  decodeURIComponent      최근(권장)*

        - 짝맞춰 사용하는 것이 중요(일부 글자 인코딩이 서로 다름)
    */

   //     alert(getParameterValues("nm_cat")); // 여러개 처리
 //   alert(getParameter("nm_title"));
 //   alert(getParameter("nm_writer"));
 //   alert(getParameter("nm_content"));
 //   alert(decodeURIComponent(getParameter("nm_content")));