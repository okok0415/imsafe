import React from "react";
import "./CSS/Create.css";

function Create() {
    return (
        <>
            <div className='create-content'>
                <form className='create'>
                    <div className="title">
                        노인 등록
                    </div>
                    <div className="instance">
                        <div className="left">성함 </div>
                        <input type="name" className="inputvalue name" />
                    </div>
                    <div className="instance">
                        <div className="left">생년월일</div>
                        <input type="date" className="inputvalue" />
                    </div>
                    <div className="instance">
                        <div className="left">성별</div>
                        <div className="right gender">
                            <span> 남성 </span> <input type="radio" name="gender" value="male" />
                            <span> 여성 </span> <input type="radio" name="gender" value="female" />
                        </div>
                    </div>
                    <div className="instance">
                        <div className="left">주소</div>
                        <input type="address" className="inputvalue" />
                    </div>
                    <div className="instance">
                        <div className="left">전화번호</div>
                        <div className="righttel">
                            <input type="tel" className="tel" name='phone1' />
                            <span> - </span>
                            <input type="tel" className="tel" name='phone2' />
                            <span> - </span>
                            <input type="tel" className="tel" name='phone3' />
                        </div>
                    </div>
                    <div className="instance">
                        <div className="left">진료기록</div>
                        <input type="text" className="inputvalue" />
                    </div>
                    <div className="instance">
                        <div className="left">보호자 성함</div>
                        <input type="protecter" className="inputvalue name" />
                    </div>
                    <div className="instance">
                        <div className="left">보호자 전화번호</div>
                        <div className="righttel">
                            <input type="tel" className="tel" name='phone1' />
                            <span> - </span>
                            <input type="tel" className="tel" name='phone2' />
                            <span> - </span>
                            <input type="tel" className="tel" name='phone3' />
                        </div>
                    </div>
                    <div className="instance">
                        <div className="left">담당자</div>
                        <input type="hospital" className="inputvalue name" />
                    </div>
                    <div className="instance">
                        <div className="left">센서</div>
                        <select className="right sensor" name="sensor">
                            <option value="">센서 선택</option>
                            <option>센서 6</option>
                            <option>센서 7</option>
                            <option>센서 8</option>
                            <option>센서 9</option>
                        </select>
                    </div>

                    <div className="instance">
                        <div className="left"></div>
                        <input type="submit" className="inputvalue btn" value="생성" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create;