import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
	query fetchBoard($number: Int){
		fetch_board(number:$number){
			number
			writer
			title
			contents
		}
	}
`

export default function StaticRoutedPage() {
	// useState랑 다르게 const 다음이 대괄호가 아니라 중괄호를 사용함
	const { data } = useQuery(FETCH_BOARD, {
		variables: {number: 83013}
	})

	console.log(data)

	return (
		<div>
			<div>{data && data.fetchBoard.number}번 게시글에 오신 것을 환영합니다!</div> 
			<div>{data?.data.fetchBoard.number}번 게시글에 오신 것을 환영합니다!</div>
			<div>작성자 : {data?.data.fetchBoard.writer}</div>
			<div>제목 : {data?.data.fetchBoard.title}</div>
			<div>내용 : {data?.data.fetchBoard.contents}번 게시글에 오신 것을 환영합니다!</div>
		</div>
	)
	


}