// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ERC1155 {

mapping(uint256=> mapping(address=>uint256))internal _balances;
mapping (address=>mapping(address=>bool)) private _operatorApprovals;


event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
    function balanceOf(address account, uint256 id) public  view returns(uint256){
        require(account!=address(0),"Address is not valid");
        return _balances[id][account];
    }

    function balanceOfBatch(address[] memory accounts, uint256[] memory ids) public view returns(uint256[] memory){
        require(accounts.length==ids.length,"Accounts and ids are not same length");    
        uint256[] memory batchBalances = new uint256[](accounts.length);

        for(uint256 i=0; i<accounts.length; i++){
            batchBalances[i] =balanceOf(accounts[i],ids[i]);
        }
        return batchBalances;
    }

     function setApprovalForAll(address _operator,bool _approved)external{
        _operatorApprovals[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender,_operator,_approved);
    }

    function isApprovedForAll(address _owner,address _operator)public view returns(bool){
        return _operatorApprovals[_owner][_operator];

    }

}
