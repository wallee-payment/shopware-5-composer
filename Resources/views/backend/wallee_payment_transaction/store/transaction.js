/**
 * wallee Shopware 5
 *
 * This Shopware 5 extension enables to process payments with wallee (https://www.wallee.com/).
 *
 * @package Wallee_Payment
 * @author wallee AG (http://www.wallee.com/)
 * @license http://www.apache.org/licenses/LICENSE-2.0  Apache Software License (ASL 2.0)
 */

//{block name="backend/wallee_payment_transaction/store/transaction"}
Ext.define('Shopware.apps.WalleePaymentTransaction.store.Transaction', {

    extend: 'Ext.data.Store',
 
    autoLoad: false,
    
    sorters: [{
		property : 'transactionId',
		direction: 'DESC'
	}],
 
    model: 'Shopware.apps.WalleePaymentTransaction.model.Transaction'
        
});
//{/block}