'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Table = require('material-ui/Table');

var _Tooltip = require('material-ui/internal/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _arrowUpward = require('material-ui/svg-icons/navigation/arrow-upward');

var _arrowUpward2 = _interopRequireDefault(_arrowUpward);

var _arrowDownward = require('material-ui/svg-icons/navigation/arrow-downward');

var _arrowDownward2 = _interopRequireDefault(_arrowDownward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var tableHeaderColumn = context.muiTheme.tableHeaderColumn;


  return {
    root: {
      fontWeight: 'normal',
      fontSize: 12,
      paddingLeft: tableHeaderColumn.spacing,
      paddingRight: tableHeaderColumn.spacing,
      height: tableHeaderColumn.height,
      textAlign: props.alignRight ? 'right' : 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: props.sorted ? '#3A3A3A' : tableHeaderColumn.textColor,
      position: 'relative',
      cursor: props.sortable ? 'pointer' : 'default'
    },
    tooltip: {
      boxSizing: 'border-box',
      marginTop: tableHeaderColumn.height / 2
    },
    sortIcon: {
      height: '100%',
      width: '100%',
      opacity: props.sorted ? 0.87 : 0.54,
      display: state.sortHovered || props.sorted ? 'inline' : 'none'
    },
    iconWrapper: {
      display: 'inline-block',
      height: 16,
      width: 16,
      verticalAlign: 'middle',
      marginLeft: 8,
      marginRight: 8
    },
    titleWrapper: {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  };
}

var DataTablesHeaderColumn = function (_TableHeaderColumn) {
  (0, _inherits3.default)(DataTablesHeaderColumn, _TableHeaderColumn);

  function DataTablesHeaderColumn(props, context) {
    (0, _classCallCheck3.default)(this, DataTablesHeaderColumn);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataTablesHeaderColumn.__proto__ || (0, _getPrototypeOf2.default)(DataTablesHeaderColumn)).call(this, props, context));

    _this.onMouseEnter = function () {
      if (_this.props.disabled) return;
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: true });
      }
      if (_this.props.sortable) {
        _this.setState({ sortHovered: true });
      }
    };

    _this.onMouseLeave = function () {
      if (_this.props.disabled) return;
      if (_this.props.tooltip !== undefined) {
        _this.setState({ hovered: false });
      }
      if (_this.props.sortable) {
        _this.setState({ sortHovered: false });
      }
    };

    _this.state = {
      sortHovered: false
    };
    return _this;
  }

  (0, _createClass3.default)(DataTablesHeaderColumn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          columnNumber = _props.columnNumber,
          hoverable = _props.hoverable,
          onClick = _props.onClick,
          onHover = _props.onHover,
          onHoverExit = _props.onHoverExit,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipStyle = _props.tooltipStyle,
          sortable = _props.sortable,
          sorted = _props.sorted,
          order = _props.order,
          alignRight = _props.alignRight,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'columnNumber', 'hoverable', 'onClick', 'onHover', 'onHoverExit', 'style', 'tooltip', 'tooltipStyle', 'sortable', 'sorted', 'order', 'alignRight']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var handlers = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick
      };

      var tooltipNode = void 0;

      if (tooltip !== undefined) {
        tooltipNode = _react2.default.createElement(_Tooltip2.default, {
          label: tooltip,
          show: this.state.hovered && !this.props.disabled,
          style: (0, _assign2.default)(styles.tooltip, tooltipStyle)
        });
      }

      var sortIcon = void 0;

      if (sorted && order === 'asc') {
        sortIcon = _react2.default.createElement(
          'div',
          { style: styles.iconWrapper },
          _react2.default.createElement(_arrowUpward2.default, { style: styles.sortIcon })
        );
      } else if (sorted && order === 'desc') {
        sortIcon = _react2.default.createElement(
          'div',
          { style: styles.iconWrapper },
          _react2.default.createElement(_arrowDownward2.default, { style: styles.sortIcon })
        );
      } else if (sortable) {
        sortIcon = _react2.default.createElement(
          'div',
          { style: styles.iconWrapper },
          _react2.default.createElement(_arrowUpward2.default, { style: styles.sortIcon })
        );
      }

      var leftSortIcon = void 0;
      var rightSortIcon = void 0;

      if (sortable && !this.props.disabled && styles.root.textAlign === 'left') {
        rightSortIcon = sortIcon;
      } else if (sortable && !this.props.disabled && styles.root.textAlign === 'right') {
        leftSortIcon = sortIcon;
      }

      var titleNode = _react2.default.createElement(
        'div',
        { style: styles.titleWrapper },
        children
      );

      return _react2.default.createElement(
        'th',
        (0, _extends3.default)({
          className: className,
          style: prepareStyles((0, _assign2.default)(styles.root, style))
        }, handlers, other),
        tooltipNode,
        leftSortIcon,
        titleNode,
        rightSortIcon
      );
    }
  }]);
  return DataTablesHeaderColumn;
}(_Table.TableHeaderColumn);

DataTablesHeaderColumn.muiName = 'DataTablesHeaderColumn';
DataTablesHeaderColumn.propTypes = {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Number to identify the header row. This property
   * is automatically populated when used with TableHeader.
   */
  columnNumber: _propTypes2.default.number,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  hoverable: _propTypes2.default.bool,
  /** @ignore */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHover: _propTypes2.default.func,
  /**
   * @ignore
   * Not used here but we need to remove it from the root element.
   */
  onHoverExit: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  order: _propTypes2.default.string,
  sortable: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  /**
   * The string to supply to the tooltip. If not
   * string is supplied no tooltip will be shown.
   */
  tooltip: _propTypes2.default.string,
  /**
   * Additional styling that can be applied to the tooltip.
   */
  tooltipStyle: _propTypes2.default.object

};
DataTablesHeaderColumn.defaultProps = {
  sortable: false,
  order: 'asc'
};
exports.default = DataTablesHeaderColumn;