$(document).ready(function() {
    $("#contract").hide(); 
});

$("#showContract").click(function (e) { 
    e.preventDefault();
    
    $("#contract").toggle(); 
});

$("#plus").click(function (e) { 
    e.preventDefault();
    
    $("#participant").append('<div id="participant" class="w-100"><hr><select class="form-control m-1" name="location"><option disabled selected>지역</option><option value="서울특별시">서울특별시</option><option value="부산광역시">부산광역시</option><option value="대구광역시">대구광역시</option><option value="인천광역시">인천광역시</option><option value="광주광역시">광주광역시</option><option value="대전광역시">대전광역시</option><option value="울산광역시">울산광역시</option><option value="세종특별자치시">세종특별자치시</option><option value="경기도">경기도</option><option value="강원도">강원도</option><option value="충청북도">충청북도</option><option value="충청남도">충청남도</option><option value="전라북도">전라북도</option><option value="전라남도">전라남도</option><option value="경상북도">경상북도</option><option value="경상남도">경상남도</option><option value="제주특별자치도">제주특별자치도</option></select><input class="form-control m-1" type="text" placeholder="나이" onKeyup="this.value=this.value.replace(/[^0-9]/g,\'\');"><select class="form-control m-1"><option disabled selected>성별</option><option>남자</option><option>여자</option></select><input class="form-control m-1" type="text" placeholder="이름"><input class="form-control m-1" type="text" placeholder="이메일"><input class="form-control m-1" type="text" placeholder="전화번호" onKeyup="this.value=this.value.replace(/[^0-9]/g,\'\');"><button class="btn btn-secondary w-100 m-1" id="minus" onclick="minus(this)">-</button></div>');
    //<button class="btn btn-secondary w-100 m-1" id="minus" onclick="minus(this)">-</button>
});

$("#submit").click(function (e) {  
    e.preventDefault();

    $checked = $("input:checkbox[id='checkContract']").is(":checked")
    if ($checked == true) {
        alert("완료");
    }
    else {
        alert("개인정보활용동의에 체크해 주세요");
    }
})

function minus(obj) {
    $(obj).parent().remove();
}

$("button.backButton").click(function (e) { 
    e.preventDefault();
    
    window.history.back();
});