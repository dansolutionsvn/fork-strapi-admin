import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@strapi/design-system';
import Inputs from '../../../components/Inputs';
import FieldComponent from '../../../components/FieldComponent';
import { toSentenceCase } from '../../../../utils'

const GridRow = ({ columns, customFieldInputs }) => {

  return (
    <Grid gap={4}>
      {columns.map(({ fieldSchema, labelAction, metadatas, name, size, queryInfos }) => {

        const isComponent = fieldSchema.type === 'component';
        const _metadatas = {
          ...(metadatas ?? {}),
          label: (toSentenceCase(metadatas?.label) ?? "").toUpperCase()
        }
        if (isComponent) {
          const { component, max, min, repeatable = false, required = false } = fieldSchema;

          return (
            <GridItem col={size} s={12} xs={12} key={component}>
              <FieldComponent
                className="tde-custom-field"
                componentUid={component}
                labelAction={labelAction}
                isRepeatable={repeatable}
                intlLabel={{
                  id: _metadatas.label,
                  defaultMessage: _metadatas.label,
                }}
                max={max}
                min={min}
                name={name}
                required={required}
              />
            </GridItem>
          );
        }

        return (
          <GridItem col={size} key={name} s={12} xs={12}>
            <Inputs
              className="tde-custom-field"
              size={size}
              fieldSchema={fieldSchema}
              keys={name}
              labelAction={labelAction}
              metadatas={_metadatas}
              queryInfos={queryInfos}
              customFieldInputs={customFieldInputs}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

GridRow.defaultProps = {
  customFieldInputs: {},
};

GridRow.propTypes = {
  columns: PropTypes.array.isRequired,
  customFieldInputs: PropTypes.object,
};

export default GridRow;
