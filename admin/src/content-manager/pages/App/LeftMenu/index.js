/**
 *
 * LeftMenu
 *
 */

import React, { useMemo, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';

import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
} from '@strapi/design-system/v2';
import { useFilter, useCollator } from '@strapi/helper-plugin';

import getTrad from '../../../utils/getTrad';
import { makeSelectModelLinks } from '../selectors';

const sortByArray = (array, data) => {
  const results = []
  for (let i in array) {
    results.push(data.find(e => e.uid === array[i]))
  }

  return results.filter(e => e && e !== null && e !== undefined)
}

const LeftMenu = () => {
  const [search, setSearch] = useState('');
  const { formatMessage, locale } = useIntl();
  const modelLinksSelector = useMemo(makeSelectModelLinks, []);
  const { collectionTypeLinks, singleTypeLinks } = useSelector(modelLinksSelector, shallowEqual);
  console.debug("[DEBUG] ~ file: index.js:29 ~ singleTypeLinks:", singleTypeLinks)
  console.debug("[DEBUG] ~ file: index.js:29 ~ collectionTypeLinks:", collectionTypeLinks)

  const mainLinks = [
    "api::post.post",
    "api::page.page",
    "api::category.category",
    "api::letak.letak",
    "api::event.event",
    "api::video.video",
    "api::banner.banner",
    "api::member.member",
  ];

  const otherLinks = [
    "plugin::users-permissions.user",
    "api::career.career",
    "api::career-form.career-form",
    "api::contact-form.contact-form",
    "api::faq.faq",
    "api::setting.setting",
    "api::store.store",
    "api::subscriber.subscriber",
    "api::supllier.supllier",
    "api::tag.tag",
    "api::translation.translation",
    "api::website.website"
  ];

  const { startsWith } = useFilter(locale, {
    sensitivity: 'base',
  });

  /**
   * @type {Intl.Collator}
   */
  const formatter = useCollator(locale, {
    sensitivity: 'base',
  });

  const menu = useMemo(
    () =>
      [
        {
          id: 'collectionTypes',
          title: 'Main Contents',
          searchable: true,
          links: sortByArray(mainLinks, collectionTypeLinks),
        },
        {
          id: 'collectionTypes2',
          title: 'Additional Contents',
          searchable: true,
          links: sortByArray(otherLinks, collectionTypeLinks),
        },
        {
          id: 'singleTypes',
          title: 'Settings',
          searchable: true,
          links: singleTypeLinks,
        },
      ].map((section) => ({
        ...section,
        links: section.links
          /**
           * Filter by the search value
           */
          .filter((link) => startsWith(link.title, search))
          /**
           * Sort correctly using the language
           */
          // .sort((a, b) => formatter.compare(a.title, b.title))
          /**
           * Apply the formated strings to the links from react-intl
           */
          .map((link) => {
            return {
              ...link,
              title: formatMessage({ id: link.title, defaultMessage: link.title }),
            };
          }),
      })),
    [collectionTypeLinks, search, singleTypeLinks, startsWith, formatMessage, formatter]
  );

  const handleClear = () => {
    setSearch('');
  };

  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const label = 'Content Manager';

  return (
    <SubNav ariaLabel={label}>
      <SubNavHeader
        label={label}
        searchable
        value={search}
        onChange={handleChangeSearch}
        onClear={handleClear}
        searchLabel={formatMessage({
          id: 'content-manager.components.LeftMenu.Search.label',
          defaultMessage: 'Search for a content type',
        })}
      />
      <SubNavSections>
        {menu.map((section) => {
          const label = section.title;

          return (
            <SubNavSection
              key={section.id}
              label={label}
              badgeLabel={section.links.length.toString()}
            >
              {section.links.map((link) => {
                const search = link.search ? `?${link.search}` : '';

                return (
                  <SubNavLink as={NavLink} key={link.uid} to={`${link.to}${search}`}>
                    {link.title}
                  </SubNavLink>
                );
              })}
            </SubNavSection>
          );
        })}
      </SubNavSections>
    </SubNav>
  );
};

export default LeftMenu;
