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
  StyledFormApplicationFeed,
  DisLike,
  Like,
} from "../../styles/styles";
import { useHistory } from "react-router-dom";
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
          Your Feed
        </StyledToggleLink>
        <StyledToggleLink component="a" className="nav__link">
          Global Feed
        </StyledToggleLink>
      </StyledNavigation>
    );
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState(Store.email);
  const [username, setUsername] = useState(Store.username);
  const [updateArticles, setStatusArticles] = useState(false); // обновление состояния постов используется в axios и useEffect.

  const vilabilityForm = () => {
    const Handler = async (e: any) => {
      e.preventDefault();

      if (
        (title && description) !== "" &&
        title.length <= 20 &&
        description.length <= 120
      ) {
        const postInfo = { title, description, email, author: { username } };
        const token = localStorage.getItem("auth");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios
          .post(
            "http://localhost:3000/api/articles",
            {
              article: postInfo,
            },
            config
          )
          .then((response) => {
            console.log(response);
            setStatusArticles(true);
            e.target.value = "";
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert(
          "Enter fewer characters in the title. Dont leave any forms blank."
        );
      }
    };

    return (
      <StyledFormApplicationFeed
        onSubmit={Handler}
        component="form"
        className="app-form"
      >
        What about you think?
        <InputTitle
          onChange={(e) => setTitle(e.target.value)}
          multiline
          variant="outlined"
          id="standard-basic"
          label="Title"
          type="text"
          placeholder="asd"
        />
        <InputDescr
          onChange={(e) => setDescription(e.target.value)}
          id="outlined-multiline-static"
          label="Description"
          type="text"
          multiline
          rows={4}
          variant="outlined"
        />
        <MyButton type="submit" className="btn">
          ADD POST!
        </MyButton>
      </StyledFormApplicationFeed>
    );
  };

  const [data, setData] = useState<
    {
      title: string;
      description: string;
      author: { username: string };
      createdAt: string;
    }[]
  >([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/articles")
      .then((response) => {
        const a = response.data.articles;
        setData(a);
        const history = useHistory();
        history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // сюда нужно добавить зависимость которая будет обновлять посты при отправке данных на сервер

  useEffect(() => {
    if (updateArticles) {
      axios
        .get("http://localhost:3000/api/articles")
        .then((response) => {
          const a = response.data.articles;
          setStatusArticles(false);
          setData(a);
          const history = useHistory();
          history.push("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [updateArticles]); // сюда нужно добавить зависимость которая будет обновлять посты при отправке данных на сервер

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
          const data = item.createdAt.slice(0, 10);
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
                        {data}
                      </span>
                    </a>
                  </div>

                  <Like className="like">
                    <span>like</span>
                  </Like>
                </StyledInfo>
                <StyledTitle component="h1" className="title">
                  {item.title}
                </StyledTitle>
                <StyledDescription component="span" className="description">
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
