/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.helloworld = require('./helloworld_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.ServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.ServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.helloworld.HelloRequest,
 *   !proto.helloworld.HelloResponse>}
 */
const methodDescriptor_Service_Hello = new grpc.web.MethodDescriptor(
  '/helloworld.Service/Hello',
  grpc.web.MethodType.UNARY,
  proto.helloworld.HelloRequest,
  proto.helloworld.HelloResponse,
  /**
   * @param {!proto.helloworld.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.helloworld.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.helloworld.ServiceClient.prototype.hello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/helloworld.Service/Hello',
      request,
      metadata || {},
      methodDescriptor_Service_Hello,
      callback);
};


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.helloworld.HelloResponse>}
 *     Promise that resolves to the response
 */
proto.helloworld.ServicePromiseClient.prototype.hello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/helloworld.Service/Hello',
      request,
      metadata || {},
      methodDescriptor_Service_Hello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.helloworld.Empty,
 *   !proto.helloworld.HelloResponse>}
 */
const methodDescriptor_Service_StreamingHello = new grpc.web.MethodDescriptor(
  '/helloworld.Service/StreamingHello',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.helloworld.Empty,
  proto.helloworld.HelloResponse,
  /**
   * @param {!proto.helloworld.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.helloworld.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.helloworld.ServiceClient.prototype.streamingHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/helloworld.Service/StreamingHello',
      request,
      metadata || {},
      methodDescriptor_Service_StreamingHello);
};


/**
 * @param {!proto.helloworld.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.helloworld.ServicePromiseClient.prototype.streamingHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/helloworld.Service/StreamingHello',
      request,
      metadata || {},
      methodDescriptor_Service_StreamingHello);
};


module.exports = proto.helloworld;

