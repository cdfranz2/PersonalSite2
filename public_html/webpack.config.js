module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
	  loaders: [
	    {
	      test: /\.jsx?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel'
	    },
	    {
	    	//tell webpack to use jsx-loader for all *.jsx files
            test: /\.jsx?$/,
            loader: 'jsx-loader?insertPragma=React.DOM&harmony'
	    }
	  ]
	},
	externals: {
		'react': 'React'
	}
};