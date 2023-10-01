/*
 * HomePage
 *
 */

import React, { memo, useMemo, useState } from "react";
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
import { Typography } from "@strapi/design-system";
import { Play, Check, ArrowRight } from "@strapi/icons";
import {
  VALID_CONTEXT,
  useCurrentWebsiteContext,
} from "../../content-manager/utils/websiteContext";

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

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

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
                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#999",
                    marginBottom: "15px",
                  }}
                >
                  Choose website below to edit
                </h3>
                <Flex gap="2rem" justify="center" align="space-between">
                  <Button
                    disabled={!!isLoading}
                    onClick={() => handleSetWebsiteContext("")}
                    endIcon={!currentWebsiteContext ? <Check /> : <Play />}
                    variant={!currentWebsiteContext ? "primary" : "tertiary"}
                  >
                    {"All websites"}
                  </Button>
                  {VALID_CONTEXT.map((e) => (
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
                  <LinkButton
                    variant={"tertiary"}
                    endIcon={<ArrowRight />}
                    to="/content-manager/singleType/api::tamda-group-eu-setting.tamda-group-eu-setting"
                  >
                    Tamda Group Global Settings
                  </LinkButton>
                  <LinkButton
                    variant={"tertiary"}
                    endIcon={<ArrowRight />}
                    to="/content-manager/singleType/api::tamda-foods-eu-setting.tamda-foods-eu-setting"
                  >
                    Tamda Foods Global Settings
                  </LinkButton>
                  <LinkButton
                    variant={"tertiary"}
                    endIcon={<ArrowRight />}
                    to="/content-manager/singleType/api::tamda-oc-eu-setting.tamda-oc-eu-setting"
                  >
                    Tamda OC Global Settings
                  </LinkButton>
                  <LinkButton
                    variant={"tertiary"}
                    endIcon={<ArrowRight />}
                    to="/content-manager/singleType/api::tamda-media-eu-setting.tamda-media-eu-setting"
                  >
                    Tamda Media Global Settings
                  </LinkButton>
                </LinksContainer>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Main>
    </Layout>
  );
};

export default memo(HomePage);
