import * as React from 'react';

import getTranslations from '../../../Translations';

import { addonRoot } from '../Functions/addonPrefix';

class NoDataListSearch extends React.Component 
{
    render(){
        const translations: { [key: string]: any } = getTranslations();

        return (
            <div className="NoData">
                <img alt="image" src={`${addonRoot()}/logo/logo-128.png`} />
                <h1 className="h1-title">
                    {
                        translations.no_data_list_search
                    }
                </h1>
            </div>
        );
    }
};

export default NoDataListSearch;