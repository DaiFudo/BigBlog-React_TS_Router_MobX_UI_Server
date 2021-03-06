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
  InputTags,
  StyledFormControl,
  StyledFormApplicationFeed,
  DisLike,
  Like,
  Trash,
  StyleContainer,
  StyledTagA,
  StyleWrapperIcons,
  StyleTextPosts,
} from "../../styles/styles";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Store from "../../store/store";

interface postsInfo {
  title?: string;
  descr?: string;
  tags?: string;
  author?: string;
  data?: string;
}

const Feed: React.FC<postsInfo> = observer(() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagList, setTags] = useState("");
  const [email, setEmail] = useState(Store.email);
  const [username, setUsername] = useState(Store.username);
  const [updateArticles, setStatusArticles] = useState(false); // обновление состояния постов используется в axios и useEffect.
  const [data, setData] = useState<
    {
      slug: string & number & symbol;
      title: string;
      description: string;
      author: { username: string };
      createdAt: string;
      tagList: string & [];
    }[]
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
  }, []); // а тут нет зависимости что бы сначала было пусто и только потом пошло заполнение данными с axios

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
  }, [updateArticles]); // зависимость обновляющая посты при отправке данных на сервер

  const SearchPost = async (e: any) => {
    e.preventDefault();
    const tag = e.target.innerText;

    axios
      .get(`http://localhost:3000/api/articles?tag=${tag}`)
      .then((response) => {
        console.log(response);

        const a = response.data.articles;
        setData(a);
        setStatusArticles(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Handler = async (e: any) => {
    e.preventDefault();
    const a = tagList.trim().split(" ");

    if (
      (title && description) !== "" &&
      title.length <= 20 &&
      description.length <= 120
    ) {
      const postInfo = {
        title,
        description,
        email,
        tagList: a,
        author: { username },
      };
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
          e.target.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Enter fewer characters in the title. Dont leave any forms blank.");
    }
  };

  // Удаление и лайк
  const DeleteItem = async (key: any) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    };
    axios
      .delete(`http://localhost:3000/api/articles/${key}`, config)
      .then((response) => {
        setStatusArticles(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const LikeDisLike = async (key: any) => {
    console.log("like");
  };

  //посты
  const YourPosts = async (e: any) => {
    console.log("click on YourPosts", e);
    axios
      .get(
        `http://localhost:3000/api/articles?author=${localStorage.getItem(
          "username"
        )}`
      )
      .then((response) => {
        const a = response.data.articles;
        setData(a);
        setStatusArticles(false);
        console.log(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GlobalPosts = async (e: React.MouseEvent) => {
    console.log("click on GlobalPosts", e);
    axios
      .get(`http://localhost:3000/api/articles?author=`)
      .then((response) => {
        const a = response.data.articles;
        setData(a);
        setStatusArticles(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigation = () => {
    return (
      <StyledNavigation className="nav__item">
        <StyledToggleLink
          onClick={YourPosts}
          component="a"
          className="nav__link"
        >
          Your Posts
        </StyledToggleLink>
        <StyledToggleLink
          onClick={GlobalPosts}
          component="a"
          className="nav__link"
        >
          Global Posts
        </StyledToggleLink>
      </StyledNavigation>
    );
  };

  const vilabilityForm = () => {
    return (
      <StyledFormApplicationFeed
        onSubmit={Handler}
        component="form"
        className="app-form"
        id="0"
      >
        What about you think?
        <InputTitle
          onChange={(e) => setTitle(e.target.value)}
          multiline
          variant="outlined"
          id="standard-basic"
          label="Title"
          type="text"
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
        <InputTags
          onChange={(e) => setTags(e.target.value)}
          type="text"
          id="standard-basic"
          label=""
          variant="standard"
          multiline
          rows={1}
        />
        <MyButton type="submit" className="btn">
          ADD POST!
        </MyButton>
      </StyledFormApplicationFeed>
    );
  };

  return (
    <StyledFeed>
      <StyledRow className="row">
        <StyledFeedToggle className="feed__toggle">
          <StyledNavigation>{navigation}</StyledNavigation>
        </StyledFeedToggle>
        <StyledFormControl>
          {localStorage.getItem("auth") &&
            window.location.href === "http://localhost:3001/profile" &&
            vilabilityForm}
        </StyledFormControl>
        {data.map((item) => {
          const date = item.createdAt.slice(0, 10);

          return (
            <StyledPost className="content" key={item.slug}>
              <StyledPostContent className="post-content">
                <StyledInfo className="info">
                  <div>
                    <StyledAvatar
                      src="https://i.stack.imgur.com/xHWG8.jpg"
                      alt="img"
                    />
                    <a className="author" href="author">
                      {item.author.username.toUpperCase()}
                      <span className="date">
                        <br />
                        {date}
                      </span>
                    </a>
                  </div>
                </StyledInfo>
                <StyleContainer>
                  <StyleTextPosts>
                    <StyledTitle component="h1" className="title">
                      {item.title}
                    </StyledTitle>

                    <StyledDescription component="span" className="description">
                      {item.description}
                    </StyledDescription>
                  </StyleTextPosts>
                  <StyleWrapperIcons>
                    <Trash onClick={() => DeleteItem(item.slug)} />
                    <DisLike onClick={LikeDisLike} />
                  </StyleWrapperIcons>
                </StyleContainer>
              </StyledPostContent>
            </StyledPost>
          );
        })}

        <StyledTags className="tags">
          {data.map((item) => {
            if (item.tagList) {
              const tagsShorts = item.tagList.slice(0, 1);
              const tenTags = tagsShorts.slice(0, 10);
              return (
                <StyledTag key={item.slug} component="p" className="all-tags">
                  <StyledTagA component="a" onClick={SearchPost}>
                    {tenTags}
                  </StyledTagA>
                </StyledTag>
              );
            }
          })}
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
