import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
  padding-bottom: 20px;
  border: 1px solid blue;
  text-align: center;
  align-items: center;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 찜한 게시글입니다!!~");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickBasketCancel = (el) => () => {
    // 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    //console.log(baskets);
    // 클릭한 상품 삭제
    const newBaskets = baskets.filter(
      (basketEl: IBoard) => basketEl._id !== el._id
    );

    // 삭제한 게시글
    const deletedBaskets = baskets.filter(
      (basketEl: IBoard) => basketEl._id === el._id
    );
    console.log(deletedBaskets[0]._id);
    if (el._id !== deletedBaskets[0]._id) {
      alert("이미 찜목록이 해제된 게시글입니다.");
    } else if (el._id === deletedBaskets[0]._id) {
      alert("찜목록이 해제되었습니다");
    }
    /* else if (deletedBaskets[0]._id === undefined) {
      alert("이미 찜목록이 해제된 게시글입니다.");
    } */

    // typename제외한 나머지 가져오기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)} id={el._id}>
            게시물담기
          </button>
          <button onClick={onClickBasketCancel(el)}>담기취소</button>
        </MyRow>
      ))}
    </div>
  );
}
