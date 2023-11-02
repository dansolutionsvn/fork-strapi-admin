/*
 * HomePage
 *
 */

import React, { memo, useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { LoadingIndicatorPage, useGuidedTour } from "@strapi/helper-plugin";
import {
  Layout,
  Main,
  Box,
  Grid,
  GridItem,
  Button,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  Badge,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
  LinkButton,
} from "@strapi/design-system";
import useLicenseLimitNotification from "ee_else_ce/hooks/useLicenseLimitNotification";
import cornerOrnamentPath from "./assets/corner-ornament.svg";
import { useModels } from "../../hooks";
import isGuidedTourCompleted from "../../components/GuidedTour/utils/isGuidedTourCompleted";
import GuidedTourHomepage from "../../components/GuidedTour/Homepage";
import SocialLinks from "./SocialLinks";
import HomeHeader from "./HomeHeader";
import ContentBlocks from "./ContentBlocks";
import { Play, Check, ArrowRight, Upload } from "@strapi/icons";
import {
  VALID_CONTEXT,
  useCurrentWebsiteContext,
} from "../../content-manager/utils/websiteContext";
import { fetchUser, putUser } from '../../pages/ProfilePage/utils/api';
import { useQuery, useMutation, useQueryClient } from 'react-query';


const LogoContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150 / 16}rem;
  }
`;

const LinksContainer = styled(`div`)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  a {
    text-decoration: none;
  }
`;


const HomePage = () => {
  // Temporary until we develop the menu API
  const {
    collectionTypes,
    singleTypes,
    isLoading: isLoadingForModels,
  } = useModels();
  const { guidedTourState, isGuidedTourVisible, isSkipped } = useGuidedTour();
  useLicenseLimitNotification();

  const showGuidedTour =
    !isGuidedTourCompleted(guidedTourState) &&
    isGuidedTourVisible &&
    !isSkipped;

  const { push } = useHistory();
  const handleClick = (e) => {
    e.preventDefault();

    push("/plugins/content-type-builder/content-types/create-content-type");
  };

  const hasAlreadyCreatedContentTypes = useMemo(() => {
    const filterContentTypes = (contentTypes) =>
      contentTypes.filter((c) => c.isDisplayed);

    return (
      filterContentTypes(collectionTypes).length > 1 ||
      filterContentTypes(singleTypes).length > 0
    );
  }, [collectionTypes, singleTypes]);

  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentWebsiteContext, setCurrentWebsiteContext] =
    useCurrentWebsiteContext();

  const handleSetWebsiteContext = (context) => {
    setIsLoading(true);
    setCurrentWebsiteContext(context);
    setTimeout(() => {
      window.location.reload();
      setIsLoading(false);
    }, 200);
  };

  const handleCallYoutubeSync = async () => {
    setLoading(true)
    await fetch('/api/youtube-video/sync');
  }

  const { status, data: currentUser } = useQuery('user', () => fetchUser(), {
    onSuccess() {
      console.log('success')
    },
    onError() {
      toggleNotification({
        type: 'warning',
        message: { id: 'notification.error', defaultMessage: 'An error occured' },
      });
    },
  });

  const [stats, setStats] = useState([])

  useEffect(() => {
    async function getStats() {
      // const statsResponse = (await fetch(`http://localhost:1337/api/website/stats${currentWebsiteContext && `?site=${currentWebsiteContext}`}`));
      const statsResponse = (await fetch(`/api/website/stats${currentWebsiteContext ? `?site=${currentWebsiteContext}` : ``}`));
      const data = await statsResponse.json()
      setStats(data?.data)
    }
    if (currentWebsiteContext) {
      getStats()
    }
  }, [currentWebsiteContext])

  const isFetchingUser = status !== 'success';
  const authorizedWebsites = currentUser?.roles?.find(e => e.code === "strapi-super-admin") ? VALID_CONTEXT : currentUser?.roles?.filter(e => VALID_CONTEXT.includes(e.name)).map(e => e.name);

  if (isLoadingForModels || isFetchingUser) {
    return <LoadingIndicatorPage />;
  }

  const isAdmin = (authorizedWebsites.length === 4 || currentUser?.roles?.find(e => e.code === "strapi-super-admin"));

  return (
    <Layout>
      <Helmet title={"TAMDA CMS"} />
      <Main>
        <LogoContainer>
          <img alt="" aria-hidden src={cornerOrnamentPath} />
        </LogoContainer>
        <Box padding={10}>
          <br />
          <Grid gap={6}>
            <GridItem col={12} s={12}>
              <Box
                padding={4}
                hasRadius
                background="neutral0"
                shadow="tableShadow"
              >
                <>
                  <Flex gap="2rem" justify="center" align="space-between" style={{ flexWrap: "wrap", alignItems: "start"}}>
                    {(stats ?? []).map(e => (
                      <Card style={{ width: 'auto', flex: "0 48%"}}>
                        <CardBody>
                          {/* <Box padding={2} background="primary100">
                            <Pencil />
                          </Box> */}
                          <CardContent>
                            <CardTitle>{e.title}</CardTitle>
                            <CardSubtitle style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.5rem"}}>
                              {e.data && e.data.map(post => (
                                <a style={{ display: "block", color: "#0b7931", textDecoration: "none"}} href={`https://cms.tamdagroup.eu/admin/content-manager/collectionType/api::post.post/${post.id}`} target="_blank" title={post.title}>{post.title} - <Badge>{post.views ?? 0}</Badge></a>
                              ))}
                            </CardSubtitle>
                          </CardContent>
                          {e.count != null && (
                            <CardBadge active>{e.count}</CardBadge>
                          )}
                        </CardBody>
                      </Card>
                    ))}
                    {stats.length == 0 && 'Loading...'}
                  </Flex>
                </>
              </Box>
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid gap={6}>
            <GridItem col={12} s={12}>
              <Box
                padding={4}
                hasRadius
                background="neutral0"
                shadow="tableShadow"
              >
                {authorizedWebsites.length > 0 ? (
                  <>
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "18px",
                        color: "#999",
                        marginBottom: "15px",
                      }}
                    >
                      Choose 1 website below to edit
                    </h3>
                    <Flex gap="2rem" justify="center" align="space-between">
                      {isAdmin && (
                        <Button
                          disabled={!!isLoading}
                          onClick={() => handleSetWebsiteContext("")}
                          endIcon={!currentWebsiteContext ? <Check /> : <Play />}
                          variant={!currentWebsiteContext ? "primary" : "tertiary"}
                        >
                          {"All websites"}
                        </Button>
                      )}
                      {authorizedWebsites.map((e) => (
                        <Button
                          disabled={!!isLoading}
                          onClick={() => handleSetWebsiteContext(e)}
                          endIcon={
                            e == currentWebsiteContext ? <Check /> : <Play />
                          }
                          variant={
                            e == currentWebsiteContext ? "primary" : "tertiary"
                          }
                          key={e}
                        >
                          {e?.toUpperCase()}
                        </Button>
                      ))}
                    </Flex>
                  </>
                ) : (
                  <h3 style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#999",
                    marginBottom: "15px",
                    color: "red",
                  }}>
                    Permission denied. Ask your administrator to grant access to atleast 1 website to continue.
                  </h3>
                )}
              </Box>
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid gap={6}>
            <GridItem col={12} s={12}>
              <Box
                padding={4}
                hasRadius
                background="neutral0"
                shadow="tableShadow"
              >
                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#999",
                    marginBottom: "15px",
                  }}
                >
                  Global Settings
                </h3>
                <LinksContainer
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "1rem",
                  }}
                >
                  <LinkButton
                    variant={"tertiary"}
                    to="/content-manager/collectionType/api::banner.banner"
                    endIcon={<ArrowRight />}
                  >
                    Advertising Banners
                  </LinkButton>
                  <LinkButton
                    variant={"tertiary"}
                    endIcon={<ArrowRight />}
                    to="/content-manager/collectionType/api::translation.translation"
                  >
                    Translations
                  </LinkButton>

                  {(isAdmin || authorizedWebsites.includes("tamdagroup.eu")) && (
                    <LinkButton
                      variant={"tertiary"}
                      endIcon={<ArrowRight />}
                      to="/content-manager/singleType/api::tamda-group-eu-setting.tamda-group-eu-setting"
                    >
                      Tamda Group Global Settings
                    </LinkButton>
                  )}
                  {(isAdmin || authorizedWebsites.includes("tamdafoods.eu")) && (
                    <LinkButton
                      variant={"tertiary"}
                      endIcon={<ArrowRight />}
                      to="/content-manager/singleType/api::tamda-foods-eu-setting.tamda-foods-eu-setting"
                    >
                      Tamda Foods Global Settings
                    </LinkButton>
                  )}
                  {(isAdmin || authorizedWebsites.includes("tamdaoc.eu")) && (
                    <LinkButton
                      variant={"tertiary"}
                      endIcon={<ArrowRight />}
                      to="/content-manager/singleType/api::tamda-oc-eu-setting.tamda-oc-eu-setting"
                    >
                      Tamda OC Global Settings
                    </LinkButton>
                  )}
                  {(isAdmin || authorizedWebsites.includes("tamdamedia.eu")) && (
                    <LinkButton
                    variant={"tertiary"}
                    endIcon={<ArrowRight />}
                    to="/content-manager/singleType/api::tamda-media-eu-setting.tamda-media-eu-setting"
                    >
                      Tamda Media Global Settings
                    </LinkButton>
                  )}
                </LinksContainer>
              </Box>
            </GridItem>
          </Grid>
          <br />
          <br />
          <Grid gap={6}>
            <GridItem col={12} s={12}>
              <Box
                padding={4}
                hasRadius
                background="neutral0"
                shadow="tableShadow"
              >
                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#999",
                    marginBottom: "15px",
                  }}
                >
                  Information
                </h3>
                <LinksContainer
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "1rem",
                  }}
                >
                  {(isAdmin || authorizedWebsites.includes("tamdamedia.eu")) && (
                    <>
                      <h4>Youtube Video on TamdaMedia</h4>
                      {/* <p style={{ fontSize: '12px', fontStyle: "italic"}}>Last synced from Youtube: </p> */}
                      <div>
                        <Button
                          variant={"tertiary"}
                          onClick={() => handleCallYoutubeSync()}
                          endIcon={<ArrowRight />}
                          loading={loading}
                          >
                          {loading ? "Synchronizing..." : "Click here to Start synchronize videos from Youtube Playlist"}
                        </Button>
                      </div>
                      <p>
                        {loading && "Synchronizing, could be take more than 2 minutes. Please comeback later."}
                      </p>
                    </>
                  )}
                </LinksContainer>
              </Box>
            </GridItem>
          </Grid>
          <br />
          <br />
          {(isAdmin || authorizedWebsites.includes("tamdafoods.eu") || authorizedWebsites.includes("tamdagroup.eu")) && (
          <Grid gap={6}>
            <GridItem col={12} s={12}>
              <Box
                padding={4}
                hasRadius
                background="neutral0"
                shadow="tableShadow"
              >
                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#999",
                    marginBottom: "15px",
                  }}
                >
                  Data Export
                </h3>
                <LinksContainer
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "1rem",
                  }}
                >
                    <>
                      <h4>Employment candidates</h4>
                      {/* <p style={{ fontSize: '12px', fontStyle: "italic"}}>Last synced from Youtube: </p> */}
                      <div>
                        <LinkButton
                          to="https://cms.tamdagroup.eu/api/website/export"
                          startIcon={<Upload />}
                        >
                          Export Data
                        </LinkButton>
                      </div>
                    </>
                </LinksContainer>
              </Box>
            </GridItem>
          </Grid>
          )}
        </Box>
      </Main>
    </Layout>
  );
};

export default memo(HomePage);
