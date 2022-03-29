import * as DS from '../detail/BoardDetail.style'

export default function BoardDetailUi(props) {
    return (

    <DS.OutWrapper>
                <DS.Wrapper>
                    <DS.ProfileWrapper>
                        <DS.Profile>
                            <DS.Photo src="/img/profile.png" />
                            <DS.ProfileDetail>
                                <DS.Writer>{props.data?.fetchBoard.writer}</DS.Writer>
                                <DS.Date>{props.data?.fetchBoard.createdAt.slice(0, 10)}</DS.Date>
                            </DS.ProfileDetail>
                        </DS.Profile>
                        <DS.IconWrapper>
                            <DS.Share src="/img/share.png" ></DS.Share>
                            <DS.Spot src="/img/spot.png" />
                        </DS.IconWrapper>
                    </DS.ProfileWrapper>
                    <DS.ContentWrapper>
                        <DS.Title>{props.data?.fetchBoard.title}</DS.Title>
                        <DS.ContentImage>{props.data?.fetchBoard.images}</DS.ContentImage>
                        <DS.Content>{props.data?.fetchBoard.contents}</DS.Content>
                    </DS.ContentWrapper>
                    <DS.YoutubeWrapper>
                        <DS.Youtube>{props.data?.fetchBoard.youtubeUrl}</DS.Youtube>
                    </DS.YoutubeWrapper>
                    <DS.LikeWrapper>
                        <DS.InnerWrapper>
                            <DS.ThumbsButton src="/img/thumbsUp.png" />
                            <DS.LikeCount>1920</DS.LikeCount>
                            {/* <LikeCount>{data?.fetchBoard.likeCount}</LikeCount> */}
                        </DS.InnerWrapper>
                        <DS.InnerWrapper>
                            <DS.ThumbsButton src="/img/thumbsDown.png" />
                            <DS.DislikeCount>1920</DS.DislikeCount>
                            {/* <DislikeCount>{data?.fetchBoard.disLikeCount}</DislikeCount> */}
                        </DS.InnerWrapper>
                    </DS.LikeWrapper>
                </DS.Wrapper>



                <DS.ButtonWrapper>
                    <DS.Button>목록으로</DS.Button>
                    <DS.Button>수정하기</DS.Button>
                    <DS.Button>삭제하기</DS.Button>
                </DS.ButtonWrapper>
            </DS.OutWrapper>
    );
}