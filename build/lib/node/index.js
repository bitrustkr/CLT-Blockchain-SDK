"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node =
/*#__PURE__*/
function () {
  function Node() {
    _classCallCheck(this, Node);
  }

  _createClass(Node, [{
    key: "getValidators",
    value: function getValidators() {
      var id = "dontcare";
      var method = "validators";
      return {
        block_height: "13967",
        validators: [{
          address: "5860EA6D8D8BD810812D43D1F44157EEB89F5F57",
          pub_key: "A33519E2814109F0EF3189971E6C18A2BA05EDD91BB328DEBA2B930B8160656A",
          voting_power: "10",
          proposer_priority: "0"
        }]
      };
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      var id = "dontcare";
      var method = "node_info";
      return {
        node_info: {
          protocol_version: {
            p2p: "7",
            block: "10",
            app: "1"
          },
          id: "0213ec14f96f6d1d5084f65a4109ff5550d131b2",
          listen_addr: "tcp://0.0.0.0:26656",
          network: "logichain-dev",
          version: "0.32.1",
          channels: "4020212223303800",
          moniker: "yongseokkwon-pc",
          other: {
            tx_index: "on",
            rpc_address: "tcp://127.0.0.1:26657"
          }
        },
        sync_info: {
          latest_block_hash: "57C34CC87C731A2649B0201039FFB94A51B180CBF094FDC1FBBD1ABCA7AA8C81",
          latest_app_hash: "86416F5FFF6619489F9A42A0636E07438A86F1649A5983DD7B032AFC35FF310A",
          latest_block_height: "14977",
          latest_block_time: "2019-08-23T01:56:22.4903998Z",
          catching_up: false
        },
        validator_info: {
          address: "5860EA6D8D8BD810812D43D1F44157EEB89F5F57",
          pub_key: "A33519E2814109F0EF3189971E6C18A2BA05EDD91BB328DEBA2B930B8160656A",
          voting_power: "10",
          proposer_priority: "0"
        },
        net_info: {
          listening: true,
          listeners: ["Listener(@)"],
          n_peers: "0",
          peers: []
        }
      };
    }
  }]);

  return Node;
}();

exports.Node = Node;