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

           it('Add a new bank', async () => {
      
		try {
			await _contract.addNewBank("Bank One", _bankOne);
		}
      

		catch (e) {

		}
          let _name = await _contract.getBank(_bankOne);
         assert.equal("Bank One", _name, "Incorrect bank name");
        });
    })
})