const DKYCVerification = artifacts.require("DKYCVerification")


contract('DKYCVerification', accounts => {

    let _contract = null
    let _owner = null
    let _bankOne = null

    const owner = accounts[0];
    const randomAcc = accounts[1];
    const tokenHolderOne = accounts[2];
    const tokenHolderTwo = accounts[3];
    const tokenHolderThree = accounts[4];

     describe('match DKYCVerification spec', () => {
        beforeEach(async () => {
            _contract = await DKYCVerification.deployed()
            _owner = accounts[0]
            _bankOne = accounts[1]
        })

           it('Get the contract Owner', async () => {
            let owner = await _contract.getContractOwner.call();
            assert.equal(accounts[0], owner, "Incorrect account");
        });

        //addNewBank
        it('Add a new bank', async () => {
      
		try {
			await _contract.addNewBank("Bank One", _bankOne);
		}

		catch (e) {

		}
          let _bank = await _contract.getBank(_bankOne);
         assert.equal("Bank One", _bank[1], "Incorrect bank name");
        });

        //addNewCustomerToBank
        it('Add New Customer To Bank', async () => {
      
		try {
			await _contract.addNewCustomerToBank("Customer One", "Customer Data", {from: _bankOne});
		}

		catch (e) {

		}
          let _customer = await _contract.viewCustomerData("Customer One");
         assert.equal("Customer Data", _customer[1], "Incorrect customer");
        });

         //addNewCustomerRequestForKYC
        it('Add New Customer Request For KYC', async () => {
      
		try {
			await _contract.addNewCustomerRequestForKYC("Customer One", {from: _bankOne});
		}

		catch (e) {

		}
          let _customer = await _contract.getCustomerKycStatus("Customer One");
         assert.equal(true, _customer, "Kyc not updated");
        });

         //allowBankFromKYC
        it('Allow Bank From KYC', async () => {
      
		try {
			await _contract.allowBankFromKYC(_bankOne, {from: _owner});
		}

		catch (e) {

		}
          let _bank = await _contract.getBank(_bankOne);
         assert.equal(true, _bank[3], "Kyc not allowed");
        });

         //blockBankFromKYC
        it('Block Bank From KYC', async () => {
      
		try {
			await _contract.blockBankFromKYC(_bankOne, {from: _owner});
		}

		catch (e) {

		}
          let _bank = await _contract.getBank(_bankOne);
         assert.equal(false, _bank[3], "Kyc not allowed");
        });

         //allowBankFromAddingNewCustomers
        it('Allow Bank From Adding New Customer', async () => {
      
		try {
			await _contract.allowBankFromAddingNewCustomers(_bankOne, {from: _owner});
		}

		catch (e) {

		}
          let _bank = await _contract.getBank(_bankOne);
        //   console.log(_bank)
         assert.equal(true, _bank[4], "New Customer not allowed");
        });

         //blockBankFromAddingNewCustomers
        it('Block Bank From Adding New Customer', async () => {
      
		try {
			await _contract.blockBankFromAddingNewCustomers(_bankOne, {from: _owner});
		}

		catch (e) {

		}
          let _bank = await _contract.getBank(_bankOne);
         assert.equal(false, _bank[4], "New Customer allowed");
        });


    })
})