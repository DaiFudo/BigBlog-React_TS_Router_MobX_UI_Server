import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledFeed,
  StyledFeedToggle,
  StyledRow,
  StyledNavigation,
  StyledPost,
  StyledToggleLink,
  StyledAvatar,
  StyledInfo,
  StyledLike,
  StyledPostContent,
  StyledTitle,
  StyledDescription,
  StyledTags,
  StyledTag,
  Pagination,
  StyledList,
  StyledAttribyteA,
  MyButton,
  InputTitle,
  InputDescr,
  StyledFormControl,
  StyledFormApplication,
} from "../../styles/styles";
import { observer } from "mobx-react-lite";
import Store from "../../store/store";

interface postsInfo {
  title?: string;
  descr?: string;
  author?: string;
  data?: string;
}

const Feed: React.FC<postsInfo> = observer(() => {
  const navigation = () => {
    return (
      <StyledNavigation className="nav__item">
        <StyledToggleLink component="a" className="nav__link">
          Global Feed
        </StyledToggleLink>
        <StyledToggleLink component="a" className="nav__link">
          Your Feed
        </StyledToggleLink>
      </StyledNavigation>
    );
  };

  const vilabilityForm = () => {
    const Handler = async (e: any) => {
      e.preventDefault();
      const token = localStorage.getItem("auth");
      const config = {};
      axios
        .post("http://localhost:3000/api/articles")
        .then((response) => {
          //console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <StyledFormApplication
        onSubmit={Handler}
        component="form"
        className="app-form"
      >
        What about you think?
        <InputTitle
          multiline
          variant="outlined"
          id="standard-basic"
          label="Title"
        />
        <InputDescr
          id="outlined-multiline-static"
          label="Descr"
          multiline
          rows={4}
          variant="outlined"
        />
        <MyButton type="submit" className="btn">
          ADD POST!
        </MyButton>
      </StyledFormApplication>
    );
  };

  const [data, setData] = useState<
    { title: string; description: string; author: { username: string } }[]
  >([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/articles")
      .then((response) => {
        const a = response.data.articles;
        setData(a);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StyledFeed>
      <StyledRow className="row">
        <StyledFeedToggle className="feed__toggle">
          <StyledNavigation>{navigation}</StyledNavigation>
        </StyledFeedToggle>
        <StyledFormControl>
          {localStorage.getItem("auth") ? vilabilityForm : <div>asdasd</div>}
        </StyledFormControl>
        {data.map((item) => {
          console.log(item);
          return (
            <StyledPost className="content">
              <StyledPostContent className="post-content">
                <StyledInfo className="info">
                  <div>
                    <StyledAvatar
                      src="https://static.productionready.io/images/smiley-cyrus.jpg"
                      alt="img"
                    />
                    <a className="author" href="author">
                      {item.author.username}
                      <span className="date">
                        <br />
                        September 5, 2021
                      </span>
                    </a>
                  </div>
                  <StyledLike className="like">
                    <span>like</span>
                  </StyledLike>
                </StyledInfo>
                <StyledTitle component="h1" className="title">
                  {item.title}
                </StyledTitle>
                <StyledDescription component="p" className="description">
                  {item.description}
                </StyledDescription>
              </StyledPostContent>
            </StyledPost>
          );
        })}

        <StyledTags className="tags">
          <StyledTag component="p" className="all-tags">
            Hentai
          </StyledTag>
          <StyledTag component="p" className="all-tags">
            Anime
          </StyledTag>
          <StyledTag component="p" className="all-tags">
            Yety
          </StyledTag>
        </StyledTags>
        <nav>
          <Pagination component="ul" className="pagination">
            <StyledList component="li" className="page-item">
              <StyledAttribyteA component="a" className="page-link">
                1
              </StyledAttribyteA>
            </StyledList>
            <StyledList className="page-item">
              <StyledAttribyteA className="page-link">2</StyledAttribyteA>
            </StyledList>
            <StyledList className="page-item">
              <StyledAttribyteA className="page-link">3</StyledAttribyteA>
            </StyledList>
          </Pagination>
        </nav>
      </StyledRow>
    </StyledFeed>
  );
});
export default Feed;
