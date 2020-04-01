/**
 * wallee Shopware 5
 *
 * This Shopware 5 extension enables to process payments with wallee (https://www.wallee.com/).
 *
 * @package Wallee_Payment
 * @author customweb GmbH (http://www.customweb.com/)
 * @license http://www.apache.org/licenses/LICENSE-2.0  Apache Software License (ASL 2.0)
 */

//{block name="backend/wallee_payment_synchronize/application"}
Ext.define('Shopware.apps.WalleePaymentSynchronize', {
    
    extend: 'Enlight.app.SubApplication',
    
    name: 'Shopware.apps.WalleePaymentSynchronize',
    
    loadPath: '{url action=load}',
    
    controllers: [
        'Synchronize'
    ],
    
    launch: function() {
        var me = this;
        me.getController('Synchronize').directSynchronize();
    }
    
});
//{/block}