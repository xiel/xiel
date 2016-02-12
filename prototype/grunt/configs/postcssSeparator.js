module.exports = {
	options: {
		keepOrigin: false,
		dataFile: true
	},
	dev: {
		options: {
			pattern: {
				matchValue: /data/, // The RegExp to match values with
				matchParent: true // Rules (eg. in @media blocks) include their parent node.
			}
		},
		files: {
			'<%= paths.dev %>/css/styles.icons.css': ['<%= paths.dev %>/css/styles.css']
		}
	},
	dist: {
		options: {
			pattern: {
				matchValue: /data/, // The RegExp to match values with
				matchParent: true // Rules (eg. in @media blocks) include their parent node.
			}
		},
		files: {
			'<%= paths.dist %>/css/styles.icons.css': ['<%= paths.dist %>/css/styles.css']
		}
	}
}