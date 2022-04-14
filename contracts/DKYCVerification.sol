// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DKYCVerification {
    //'_owner' variable of type address with a public getter function
    address private _owner;
    // number of the total bank + kycCounter
    uint256 private randomOne;
    uint256 private kycCounter;

    constructor() {
        setContractOwner(msg.sender);
        randomOne = 100;
    }

    // create an 'onlyOwner' modifier that throws if called by any account other than the owner.
    modifier onlyOwner() {
        require(msg.sender == _owner, "If the caller is not contract owner");
        _;
    }

    // Bank struct
    struct Bank {
        uint256 bankNumber;
        string bankName;
        uint256 kycCounter;
        address bankAddress;
        bool isAllowedToAddCustomer;
        bool kycPrivilege;
    }

    // Customer struct
    struct Customer {
        uint256 customerNumber;
        string customerName;
        string customerData;
        address customerBank;
        bool kycStatus;
    }

    mapping(address => Bank) private _bank; //  Mapping a bank's address to the Bank
    mapping(string => Customer) private _customerInfo; //  Mapping a customer's username to the Customer

    // addNewBank
    function addNewBank(string memory _bankName, address _bankAddress)
        public
        onlyOwner
    {
        require(
            !_check(_bank[_bankAddress].bankName, _bankName),
            "This token already exists"
        );
        randomOne = randomOne + 4;
        kycCounter = kycCounter + 1;

        _bank[_bankAddress] = Bank({
            bankNumber: randomOne,
            bankName: _bankName,
            kycCounter: kycCounter,
            bankAddress: _bankAddress,
            isAllowedToAddCustomer: true,
            kycPrivilege: true
        });
    }

    //getBank
    function getBank(address _address)
        public
        view
        returns (
            uint256,
            string memory,
            address,
            bool,
            bool
        )
    {
        return (
            _bank[_address].bankNumber,
            _bank[_address].bankName,
            _bank[_address].bankAddress,
            _bank[_address].kycPrivilege,
            _bank[_address].isAllowedToAddCustomer
        );
    }

    // blockBankFromKYC
    function blockBankFromKYC(address _bankAddress)
        public
        onlyOwner
        returns (int256)
    {
        require(_bank[_bankAddress].bankNumber != 0, "Bank details not found");
        _bank[_bankAddress].kycPrivilege = false;
        return 1;
    }

    //allowBankFromKYC
    function allowBankFromKYC(address _bankAddress)
        public
        onlyOwner
        returns (int256)
    {
        require(_bank[_bankAddress].bankNumber != 0, "Bank details not found");
        _bank[_bankAddress].kycPrivilege = true;
        return 1;
    }

    // blockBankFromAddingNewCustomers

    function blockBankFromAddingNewCustomers(address _bankAddress)
        public
        onlyOwner
        returns (int256)
    {
        require(_bank[_bankAddress].bankNumber != 0, "Bank details not found");
        require(
            _bank[_bankAddress].isAllowedToAddCustomer,
            "Requested Bank is already blocked"
        );
        _bank[_bankAddress].isAllowedToAddCustomer = false;
        return 1;
    }

    //allowBankFromAddingNewCustomers

    function allowBankFromAddingNewCustomers(address _bankAddress)
        public
        onlyOwner
        returns (int256)
    {
        require(_bank[_bankAddress].bankNumber != 0, "Bank details not found");
        require(
            _bank[_bankAddress].isAllowedToAddCustomer,
            "Requested Bank is already unblocked"
        );
        _bank[_bankAddress].isAllowedToAddCustomer = true;
        return 1;
    }

    //addNewCustomerToBank

    function addNewCustomerToBank(
        string memory _customerName,
        string memory _customerData
    ) public {
        require(
            _bank[msg.sender].isAllowedToAddCustomer,
            "Requested Bank is blocked adding new customers"
        );

        require(
            !_check(_customerInfo[_customerName].customerName, _customerName),
            "Requested Customer exists"
        );
        randomOne = randomOne + 4;

        _customerInfo[_customerName] = Customer({
            customerNumber: randomOne,
            customerName: _customerName,
            customerData: _customerData,
            customerBank: msg.sender,
            kycStatus: false
        });
    }

    //viewCustomerData
    function viewCustomerData(string memory _customerName)
        public
        view
        returns (
            uint256,
            string memory,
            string memory,
            bool
        )
    {
        require(
            _customerInfo[_customerName].customerNumber != 0,
            "Requested Customer not found"
        );
        return (
            _customerInfo[_customerName].customerNumber,
            _customerInfo[_customerName].customerName,
            _customerInfo[_customerName].customerData,
            _customerInfo[_customerName].kycStatus
        );
    }

    //addNewCustomerRequestForKYC

    function addNewCustomerRequestForKYC(string memory _customerName)
        public
        returns (int256)
    {
        require(
            _bank[msg.sender].kycPrivilege,
            "Requested Bank have already activated KYC Privilege"
        );
        _customerInfo[_customerName].kycStatus = true;
        _bank[msg.sender].kycCounter++;

        return 1;
    }

    //getCustomerKycStatus
    function getCustomerKycStatus(string memory _customerName)
        public
        view
        returns (bool)
    {
        require(
            _customerInfo[_customerName].customerNumber != 0,
            "Requested Customer is not added"
        );
        return (_customerInfo[_customerName].kycStatus);
    }

    //getContractOwner
    function getContractOwner() public view returns (address) {
        return _owner;
    }

    //setContractOwner
    function setContractOwner(address newOwner) private {
        _owner = newOwner;
    }

    // checkBank
    function _check(string memory _a, string memory _b)
        private
        pure
        returns (bool)
    {
        if (bytes(_a).length != bytes(_b).length) {
            return false;
        } else {
            return keccak256(bytes(_a)) == keccak256(bytes(_b));
        }
    }
}
